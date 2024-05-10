import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//引入mock插件
import { viteMockServe } from 'vite-plugin-mock'
//自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite'
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'
//vue3语法糖
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
//引入path
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      VueSetupExtend(),
      AutoImport({
        //安装两行后你会发现在组件中不用再导入ref，reactive等
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts',
      }),
      Components({
        // 引入组件的,包括自定义组件，存放的位置
        dts: 'src/components.d.ts',
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        //保证开发环境使用mock接口
        // localEnabled: command === 'serve'
        mockPath: command === 'serve' ? 'mock' : undefined,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    //代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})

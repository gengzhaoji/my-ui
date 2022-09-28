# [VitePress](https://www.npmjs.com/package/vitepress-demo-editor) 打包报错

打包可能会报错,提示 Error: Missing "./preload-helper" export in "vite" package

<img src='https://camo.githubusercontent.com/871c24beba7b6c29c73088771e23a0edb1d7c06b6c2ecaec2786356c1ea121bb/687474703a2f2f63646e2e636f6465726c792e746f702f696d67732f32303232303732323232303234302e706e67' />

搜索 vite/preload-helper 替换为 \0vite/preload-helper

<img src='https://camo.githubusercontent.com/dae08fa5c35fb79a2ab1c19091eda62189e5bc0472aaa90599933a24a387c789/687474703a2f2f63646e2e636f6465726c792e746f702f696d67732f766974652e706e67' />

'vite/preload-helper'->'\0vite/preload-helper'

<img src='https://camo.githubusercontent.com/fa356163b2e993e8fde86f58a96022279f19af600b740e4ee0e39e10c1fed226/687474703a2f2f63646e2e636f6465726c792e746f702f696d67732f32303232303732323232303735392e706e67' />

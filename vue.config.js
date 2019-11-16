const vueConfig = {
  outputDir: process.env.OUTPUT_DIR,
};

const preRender = !!process.env.PRE_RENDER;
if (preRender) {

}

module.exports = vueConfig;

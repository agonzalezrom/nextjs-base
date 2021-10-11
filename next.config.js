const withImages = require("next-images");
module.exports = withImages({
    inlineImageLimit: false
});

module.exports = {
    ...module.exports,
    images: {
        disableStaticImages: true
    }
}
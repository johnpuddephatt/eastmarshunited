module.exports = {
    icon: function (name, width, height) {
        return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="${
            width || 24
        }" height="${height || 24}">
        <use xlink:href="#icon-${name}"></use>
      </svg>`
    },
    wp_image: function (image, className, sizes, ratio) {
        if (!image || !image.media_details) {
            return false
        }
        let srcset = ''
        let sizeNames = ['medium', 'large']
        for (var i = 0; i < sizeNames.length; i++) {
            srcset += `${image.media_details.sizes[sizeNames[i]].source_url}${
                ratio
                    ? '&h=' +
                      Math.round(
                          image.media_details.sizes[sizeNames[i]].width / ratio
                      ) +
                      '&crop=1'
                    : ''
            } ${image.media_details.sizes[sizeNames[i]].width}w`
            if (sizeNames.length - i > 1) {
                srcset += ','
            }
        }
        return `<img
        alt="${image.alt_text}"
        class="${className}"
        src="${image.media_details.sizes.large.source_url}${
            ratio
                ? '&h=' +
                  Math.round(image.media_details.sizes.large.width / ratio) +
                  '&crop=1'
                : ''
        }"
        srcset="${srcset}"
        sizes="${sizes}" >`
    },
    wp_avatar: function (author, className) {
        if (!author || !author.avatar_urls) {
            return false
        }
        let srcset = ''
        let sizes = ['24', '48', '96']
        for (var i = 0; i < sizes.length; i++) {
            srcset += `${author.avatar_urls[sizes[i]]} ${sizes[i]}w`
            if (sizes.length - i > 1) {
                srcset += ','
            }
        }
        return `<img
        width="48"
        height="48"
        alt="${author.name}"
        class="${className}"
        src="${author.avatar_urls['48']}"
        srcset="${srcset}" >`
    }
}

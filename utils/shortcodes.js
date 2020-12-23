module.exports = {
    icon: function (name, width, height) {
      return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="${width || 24}" height="${height || 24}">
        <use xlink:href="#icon-${name}"></use>
      </svg>`
    },
    wp_image: function(image, className) {
      let srcset = '';
      let sizes = ['medium','large','full'];
      for(var i = 0; i < sizes.length; i++) {
        srcset += `${ image.media_details.sizes[sizes[i]].source_url } ${ image.media_details.sizes[sizes[i]].width }w`;
        if(sizes.length - i > 1) {
          srcset += ','
        }
      }
      return `<img
        alt="${ image.alt_text }"
        class="${ className }"
        src="${ image.media_details.sizes.large.source_url }"
        srcset="${ srcset }" >`
    },
    wp_avatar: function(author, className) {
      let srcset = '';
      let sizes = ['24','48','96'];
      for(var i = 0; i < sizes.length; i++) {
        srcset += `${ author.avatar_urls[sizes[i]] } ${sizes[i]}w`;
        if(sizes.length - i > 1) {
          srcset += ','
        }
      }
      return `<img
        width="48"
        height="48"
        alt="${ author.name }"
        class="${ className }"
        src="${ author.avatar_urls['48'] }"
        srcset="${ srcset  }" >`
    }
}

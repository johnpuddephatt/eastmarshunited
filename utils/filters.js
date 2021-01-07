const { DateTime } = require('luxon')

module.exports = {

    dateToFormat: function (date, format) {
        return DateTime.fromISO(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    nl2br: function (str) {
      return '<p>' + str.replace(/\r|\n|\r\n/g, '</p><p>') + '</p>';
    },

    limit: function(arr, limit) {
      return arr.slice(0, limit);
    },

    array_slice: function(arr, lower,upper) {
      return arr.slice(lower, upper);
    },

    markdown: function (str) {
      const md = require('markdown-it')({
          html: false,
          breaks: true,
          linkify: true,
          typographer: true
      });
      return md.render(str);
    },

    markdownify: function (str) {
      const md = require('markdown-it')({
          html: false,
          breaks: true,
          linkify: true,
          typographer: true
      });
      return md.renderInline(str);
    },

    excerpt: function (content, excerptLength = 100) {
      if(content) {
        let excerpt = null;
        const startPosition = content.indexOf('<p>');
        const endPosition = content.indexOf('</p>');

        if (startPosition !== -1 && endPosition !== -1) {
          excerpt = content.substring(startPosition, endPosition).replace(/(<([^>]+)>)/ig,"").trim();
          if(excerpt.length > excerptLength) {
            excerpt = excerpt.substring(0,excerptLength) + '...';
          }
        }
        else {
          excerpt = '';
        }
        return excerpt;
      }
    }
}

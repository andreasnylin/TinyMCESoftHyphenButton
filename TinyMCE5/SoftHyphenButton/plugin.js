tinymce.PluginManager.add('softHyphen', function(editor, url) {
  
  /* Add a button that inserts soft hyphen character */
  editor.ui.registry.addButton('softHyphenButton', {
    tooltip: 'Soft hyphen',
    icon: 'softhyphen',
    onAction: function () {
        editor.insertContent('&shy;');
    }
  });

  editor.ui.registry.addIcon('softhyphen', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 6.35 6.35"><path d="M22.136 54.843h-.848q-.432-.506-.64-1.041-.208-.535-.208-1.172 0-.637.207-1.172.21-.535.641-1.041h.848v.065q-.182.164-.348.373-.165.207-.306.486-.135.268-.22.594-.084.326-.084.695 0 .385.081.697.083.313.223.592.135.265.303.481.171.219.351.378zM24.471 52.943h-1.716v-.647h1.716zM26.79 52.63q0 .637-.209 1.172-.207.535-.639 1.041h-.848v-.065q.18-.16.351-.375.171-.216.304-.484.14-.279.22-.592.083-.312.083-.697 0-.369-.085-.695-.083-.326-.218-.594-.142-.279-.308-.486-.165-.209-.347-.373v-.065h.848q.432.506.639 1.041.21.536.21 1.172z" transform="matrix(.91667 0 0 .91667 -18.472 -45.07)"/></svg>');

  /* Return the metadata for the plugin */
  return {
    getMetadata: function () {
      return  {
        name: 'Soft Hyphen plugin',
        url: 'https://andreasnylin.com'
      };
    }
  };
});
function keyBind (key, action) {
  jwerty.key(key, function () {
    var link = $('a[rel="' + action + '"]');
    if (link.length > 0) {
      document.location.href = link.attr('href');
    }
  });
}

keyBind('←', 'prev');
keyBind('→', 'next');
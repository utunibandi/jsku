
var posthead = document.getElementById('posthead');
if (posthead) {
  var innerHTMLContent = '<ul class="custom-list">';
  for (var i = 0; i < 6; i++) {
    innerHTMLContent += '<li class="custom-item"><center><ins data-ad-format="auto" class="adsbygoogle adsbygoogle-noablate" data-ad-client="ca-pub-3220652376420508" data-adsbygoogle-status="done" style="display: block; margin: auto; background-color: transparent; height: 300px;" data-ad-status="filled"><div id="aswift_3_host" tabindex="0" title="Advertisement" aria-label="Advertisement" style="border: none; height: 300px; width: 360px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block; overflow: visible;"><iframe id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;border:0;width:360px;height:300px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="360" height="300" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-3220652376420508&amp;h=300&amp;slotname=9093952817&amp;w=360&amp;rafmt=11&amp;format=360x300&amp;url=http://yo.fan//traceylogan&amp;host=ca-host-pub-8726151893822553&amp;" data-google-container-id="a!2" data-load-complete="true"></iframe></div></ins></center></li>';
  }
  innerHTMLContent += '</li></ul>';
  posthead.innerHTML = innerHTMLContent;

  var ulElement = posthead.querySelector('.custom-list');
  if (ulElement) {
    ulElement.style.listStyleType = 'none';
    ulElement.style.margin = '0';
    ulElement.style.padding = '0';
    ulElement.style.overflow = 'hidden';
    var liElements = ulElement.getElementsByClassName('custom-item');
    for (var j = 0; j < liElements.length; j++) {
      liElements[j].style.float = 'left';
      liElements[j].style.width = '33.33%';
    }
  }
}

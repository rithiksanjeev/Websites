window.onscroll = function() {
    let totalheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let currentScrollheight = document.documentElement.scrollTop;
    const scrollHeightPercentage = (currentScrollheight/totalheight) * 100;
    // giving the document element the width percentage
    document.getElementById('scroll-bar').style.width = scrollHeightPercentage + '%' ;
    // console.log("total height"+totalheight);
    // console.log("current height"+currentScrollheight);
    // console.log("Scroll height percentage"+scrollHeightPercentage);

    let toBottom = document.getElementById('to-bottom')
    if(currentScrollheight > 100)
    {
        toBottom.style.display = 'flex';
    }
    else
    {
        toBottom.style.display = 'none';
    }

    let totop = document.getElementById('to-top')
    if(currentScrollheight >=  totalheight-100)
    {
        toBottom.style.display = 'none';
        totop.style.display = 'flex'
    }
    else
    {
        totop.style.display = 'none';
    }
}

function scrollToBottom()
{
    window.scrollTo(0, document.body.scrollHeight);
}


function scrollToTop()
{
    window.scrollTo(0,0)
}
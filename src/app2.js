import './app2.css'
import $ from 'jquery';
const $tabBar =$('.tab-bar');
const $tabContent =$('.tab-content');
$tabBar.on("click","li",e=>{
    const $li=$(e.currentTarget);
    const n=$li.index();
    $tabBar.children()
        .eq(n).addClass('selected').siblings().removeClass('selected')
    $tabContent.children()
        .eq(n).addClass('active').siblings().removeClass('active');
})

$tabBar.children().eq(0).trigger('click')
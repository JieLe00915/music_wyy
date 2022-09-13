import Vue from 'vue';
import VueRouter from 'vue-router'

// 引入主页面
const Index = () => import('components/Index.vue')
// 右侧主体内容
const Discover = () => import('views/discover/Discover.vue')
// 主体个人推荐
const Recommend = () => import('views/discover/discoverChildren/Recommend.vue')
// 主体排行榜
const Ranking = () => import('views/discover/discoverChildren/Ranking.vue')
// 主体排行榜
const Singer = () => import('views/discover/discoverChildren/Singer.vue')
// 主体歌单
const MusicList = () => import('views/discover/discoverChildren/MusicList.vue')
// 歌单展示
const MusicListIndex = () => import('views/discover/discoverChildren/musicListChildren/MusicListIndex.vue')
// const MusicListHighquality = () => import('views/discover/discoverChildren/musicListChildren/MusicListHighquality.vue')
// 视频展示
const Video = () => import('views/video/Video.vue')
// 视频列表
const VideoList = () => import('views/video/videoChildren/VideoList.vue')
// mv列表
const MvList = () => import('views/video/videoChildren/MvList.vue')

// 歌单详情
const MusicListDetail = () => import('views/musicListDetail/MusicListDetail.vue')

// 搜索
const Search = () => import('views/search/Search.vue')
const SearchSong = () => import('views/search/searchChildren/SearchSong.vue')

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/index' },
    {
        path: '/index',
        component: Index,
        redirect: '/discover',
        children: [
            {
                path: '/discover',
                component: Discover,
                redirect: '/discover/recommend',
                children: [
                    { path: '/discover/recommend', component: Recommend },
                    {
                        path: '/discover/musiclist',
                        component: MusicList,
                        redirect: '/discover/musiclist/musiclistindex',
                        children: [
                            { path: '/discover/musiclist/musiclistindex', component: MusicListIndex },
                            // { path: '/discover/musiclist/musiclisthighquality', component: MusicListHighquality },
                        ]
                    },
                    { path: '/discover/ranking', component: Ranking },
                    { path: '/discover/singer', component: Singer },
                ]
            },
            {
                path: '/video', component: Video,
                redirect: '/video/videolist',
                children: [
                    { path: '/video/videolist', component: VideoList },
                    { path: '/video/mvlist', component: MvList },
                ]
            },
            { path: '/musiclistdetail/:id', name: 'musicListDetail', component: MusicListDetail },
      
            {
                path: '/search/:id', name: 'search', component: Search,
                redirect: '/search/searchsong/:id',
                children: [
                    { path: '/search/searchsong/:id', name: 'searchSong', component: SearchSong },
                ]
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router

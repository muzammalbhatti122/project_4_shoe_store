
import { createStore, combineReducers } from "redux";


let cards4 = {
    card4: [
        {
            pic: 'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=1080&q=75',
            name:'chita'

        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=1080&q=75',
            name:'Nike'
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct14main.avif%3Falt%3Dmedia%26token%3Dc84d6ac3-2cf9-4659-bd50-e9ff47827704&w=1080&q=75',
            name:'Bata'
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct15main.avif%3Falt%3Dmedia%26token%3Ddf4c7a51-fcb5-4a1d-952f-acb93e12b480&w=1080&q=75',
            name:'Puma'
        }
    ]
}

function adCards4(oldData = cards4, newData) {
    return oldData
}


let allCards = {
    allCard:[
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=1080&q=75',
            name:'RACER TR23 SHOES',
            dsc:'Dark Blue / Cloud White / Halo Silver',
            price:'64',
            sale:'20%',
            id:1
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=1080&q=75',
            name:'KANTANA SHOES',
            dsc:'Chalk White / Wonder Clay',
            price:'72',
            sale:'10%',
            id:2
        },
        
        {
            pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be',
            name:'RUNFALCON 2.0 SHOES',
            dsc:'Cloud White / Vision Met. ',
            price:'40',
            sale:'6%',
            id:3
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=1080&q=75',
            name:'KANTANA SHOES',
            dsc:'Chalk White / Wonder Clay',
            price:'72',
            sale:'12%',
            id:4
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct9main.png%3Falt%3Dmedia%26token%3Dcfb49f49-4ebb-4cdf-99ce-d02b9ab09655&w=1080&q=75',
            name:'GAZELLE SHOES',
            dsc:'Silver Dawn / Cloud White ',
            price:'80',
            sale:'19%',
            id:5
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct4main.avif%3Falt%3Dmedia%26token%3De7267dcd-3119-4d5b-b872-4cf9e4eefd68&w=1080&q=75',
            name:'KAPTIR 3.0 SHOES',
            dsc:'Core Black / Screaming Orange',
            price:'85',
            sale:'2%',
            id:5
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=1080&q=75',
            name:'Nike Streakfly ',
            dsc:'Road Racing Shoes. ',
            price:'90',
            sale:'12%',
            id:6
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct5main.avif%3Falt%3Dmedia%26token%3D76c8eb87-50d3-4493-9573-731d5fce55a2&w=1080&q=75',
            name:'Nike Precision',
            dsc:' 6 Basketball Shoes. Nike IN',
            price:'66',
            sale:'23%',
            id:7
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct6min.avif%3Falt%3Dmedia%26token%3D3e3729a5-bf63-425e-940f-f16c0fd539b0&w=1080&q=75',
            name:'Nike Air Max 270 Men',
            dsc:'s Shoes. Nike SG',
            price:'78',
            sale:'5%',
            id:8
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct8min2.avif%3Falt%3Dmedia%26token%3D8970eda6-5939-4053-a11b-38574ee64c39&w=1080&q=75',
            name:'Nike Air Max Alpha Trainer 5 Men',
            dsc:'s Workout Shoes.',
            price:'70',
            sale:'20%',
            id:9
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct10min2.avif%3Falt%3Dmedia%26token%3Df92e7667-03b3-460d-afa5-88de711e0786&w=1080&q=75',
            name:'Nike Air Max Plus Men',
            dsc:'s Shoes. Nike PH',
            price:'50',
            sale:'32%',
            id:10
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct10main.png%3Falt%3Dmedia%26token%3Ddb5ad18d-89d1-49ba-9491-9c806be947be&w=1080&q=75',
            name:'Nike Air Max Plus Women',
            dsc:'s Shoes. Nike BE',
            price:'100',
            sale:'10%',
            id:11
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=828&q=75',
            name:'Nike Zoom Fly 5 Men',
            dsc:'s Road Running Shoes',
            price:'88',
            sale:'19%',
            id:12
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=828&q=75',
            name:'Nike In-Season TR 13 Men',
            dsc:'s Workout Shoes. Nike IN',
            price:'55',
            sale:'47%',
            id:13
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct10min.avif%3Falt%3Dmedia%26token%3D7515fba4-3373-483f-9dcb-c8b89a773591&w=1080&q=75',
            name:'Nike Pakistan ',
            dsc:' - Shop Nike Shoes',
            price:'77',
            sale:'17%',
            id:14
        },
        {
            pic:'https://www.nike-pakistan.com/images/nike-pakistan/Men_s_Nike_Air_Jordan_1_Sneakers_Black_-PK4258278.jpg',
            name:'Nike Shoes Pakistan Official',
            dsc:'black and / white',
            price:'88',
            sale:'19%',
            id:15
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct9main.png%3Falt%3Dmedia%26token%3Dcfb49f49-4ebb-4cdf-99ce-d02b9ab09655&w=1080&q=75',
            name:'Buy Nike In Pakistan 100%',
            dsc:'Original /Shoes, /Clothing,',
            price:'55',
            sale:'35%',
            id:16
        },
        {
            pic:'https://www.nike-pakistan.com/images/nike-pakistan/Women_s_Nike_Kyrie_Flytrap_3_Basketball_-PK4256427.jpg',
            name:'Nike Shoes Pakistan Official',
            dsc:'spacial / black',
            price:'44',
            sale:'10%',
            id:17
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct15main.avif%3Falt%3Dmedia%26token%3Ddf4c7a51-fcb5-4a1d-952f-acb93e12b480&w=1080&q=75',
            name:'Nike Dunk Low Retro',
            dsc:'black/white',
            price:'67',
            sale:'40%',
            id:18
        },
        {
            pic:'https://skyseabd.com/public/uploads/all/K1mNVep8sPJ3fDWVLosZKPuuDbhHzSvjRMAGkHEj.jpg',
            name:'Nike, Keds, Sports Shoe,',
            dsc:' Running Shoe',
            price:'88',
            sale:'29%',
            id:19
        },
        {
            pic:'https://www.kickscrew.com/cdn/shop/products/main-square_3a6bc2b5-d631-4b31-a430-0e7127652137_grande.jpg?v=1690291827',
            name:'WMNS) Nike Air Max 270',
            dsc:'Ultramarine',
            price:'77',
            sale:'19%',
            id:20
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=1080&q=75',
            name:'RACER TR23 SHOES',
            dsc:'Dark Blue / Cloud White / Halo Silver',
            price:'64',
            sale:'20%',
            id:21
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=1080&q=75',
            name:'KANTANA SHOES',
            dsc:'Chalk White / Wonder Clay',
            price:'72',
            sale:'10%',
            id:22
        },
        
        {
            pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be',
            name:'RUNFALCON 2.0 SHOES',
            dsc:'Cloud White / Vision Met. ',
            price:'40',
            sale:'6%',
            id:23
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=1080&q=75',
            name:'KANTANA SHOES',
            dsc:'Chalk White / Wonder Clay',
            price:'72',
            sale:'12%',
            id:24
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct9main.png%3Falt%3Dmedia%26token%3Dcfb49f49-4ebb-4cdf-99ce-d02b9ab09655&w=1080&q=75',
            name:'GAZELLE SHOES',
            dsc:'Silver Dawn / Cloud White ',
            price:' 80',
            sale:'19%',
            id:25
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct14main.avif%3Falt%3Dmedia%26token%3Dc84d6ac3-2cf9-4659-bd50-e9ff47827704&w=1080&q=75',
            name:'Nike Streakfly ',
            dsc:'Road Racing Shoes. ',
            price:'90',
            sale:'12%',
            id:26
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=1080&q=75',
            name:'Nike Precision',
            dsc:' 6 Basketball Shoes. Nike IN',
            price:'66',
            sale:'23%',
            id:27
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct3min2.avif%3Falt%3Dmedia%26token%3D44b07f4d-a206-46b8-82c2-6f0081321efd&w=1080&q=75',
            name:'Nike Air Max 270 Men',
            dsc:'s Shoes. Nike SG',
            price:'78',
            sale:'5%',
            id:28
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct4main.avif%3Falt%3Dmedia%26token%3De7267dcd-3119-4d5b-b872-4cf9e4eefd68&w=1080&q=75',
            name:'Nike Air Max Alpha Trainer 5 Men',
            dsc:'s Workout Shoes.',
            price:'70',
            sale:'20%',
            id:29
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct3min.avif%3Falt%3Dmedia%26token%3De37feb31-9441-40a0-ac0c-4804f90f29bd&w=1080&q=75',
            name:'Nike Air Max Plus Men',
            dsc:'s Shoes. Nike PH',
            price:'50',
            sale:'32%',
            id:30
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=1080&q=75',
            name:'Nike Air Max Plus Women',
            dsc:'s Shoes. Nike BE',
            price:'100',
            sale:'10%',
            id:31
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct6min.avif%3Falt%3Dmedia%26token%3D3e3729a5-bf63-425e-940f-f16c0fd539b0&w=1080&q=75',
            name:'Nike Zoom Fly 5 Men',
            dsc:'s Road Running Shoes',
            price:'88',
            sale:'19%',
            id:32
        },
        {
            pic:'https://cdn.shopify.com/s/files/1/1692/9471/products/9753d413-4359-4bac-bd33-e6e17c7ad4db-Img-shoe_large.jpg?v=1684476723',
            name:'Nike Pakistan ',
            dsc:' - Shop Nike Shoes',
            price:'77',
            sale:'17%',
            id:33
        },
        {
            pic:'https://www.nike-pakistan.com/images/nike-pakistan/Men_s_Nike_Air_Jordan_1_Sneakers_Black_-PK4258278.jpg',
            name:'Nike Shoes Pakistan Official',
            dsc:'black and / white',
            price:'88',
            sale:'19%',
            id:34
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct11main.avif%3Falt%3Dmedia%26token%3D27367286-7570-4100-babe-02a66c791ba2&w=1080&q=75',
            name:'Buy Nike In Pakistan 100%',
            dsc:'Original /Shoes, /Clothing,',
            price:'55',
            sale:'35%',
            id:35
        },
        {
            pic:'https://www.nike-pakistan.com/images/nike-pakistan/Women_s_Nike_Kyrie_Flytrap_3_Basketball_-PK4256427.jpg',
            name:'Nike Shoes Pakistan Official',
            dsc:'spacial / black',
            price:'44',
            sale:'10%',
            id:36
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct11min.avif%3Falt%3Dmedia%26token%3D3e462f43-f7a3-456f-b918-eac71c98bd0c&w=1080&q=75',
            name:'Nike Dunk Low Retro',
            dsc:'black/white',
            price:'67',
            sale:'40%',
            id:37
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct3min2.avif%3Falt%3Dmedia%26token%3D44b07f4d-a206-46b8-82c2-6f0081321efd&w=1080&q=75',
            name:'Nike Air Max 270 Men',
            dsc:'s Shoes. Nike SG',
            price:'78',
            sale:'5%',
            id:28
        },
        {
            pic:'https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct4main.avif%3Falt%3Dmedia%26token%3De7267dcd-3119-4d5b-b872-4cf9e4eefd68&w=1080&q=75',
            name:'Nike Air Max Alpha Trainer 5 Men',
            dsc:'s Workout Shoes.',
            price:'70',
            sale:'20%',
            id:29
        },

    ]
};

function adAllcards(oldData = allCards , newData){

    return oldData

}


let addTocart = {
    adCart : []
}

function AddToCartData(oldData = addTocart , newData){

    oldData = {...oldData};

    if(newData.type == 'ADDTOCART_HOGYA'){
        oldData.adCart.push(newData.cart);
    }else if(newData.type == 'CART_DEL_HOGYA'){
        oldData.adCart.splice(newData.delCart)
    }

    return oldData;

}


let combineReduce = combineReducers({ adCards4 , adAllcards , AddToCartData })

export let meraStore = createStore(combineReduce);
/*Vue.directive('lightbox',
    {
        bing(el,binding)
        {
            el.addEventListener('click', function()
            {   
                this.img_src = img;
                console.log(this.img_src);
            })
        }
    }
)*/

let vue = new Vue(
    {
        el:"#vue",

        data:
        {
            img_src:'',
            index : 0,
            images:['img/pexels-lukas-669613.jpg','img/pexels-lukas-317385.jpg','img/pexels-pixabay-257937.jpg','img/pexels-ylanite-koppens-796602.jpg']
        },

        methods:
        {
            getUrl(src)
            {
               // console.log(src);
                
                this.img_src = src + "["+ this.images.indexOf(src) +"]";
            },

            next(src)
            {
                index = this.images.indexOf(src);
                if (index > this.images.length) index = 0;
                this.img_src = this.images[index+1];
                console.log(index);
            },

            preced(src)
            {
                index = this.images.indexOf(src);
                if (index < 0) index = this.images.length ;
                this.img_src = this.images[index-1];
                console.log(index);
            },

        }
    }
);
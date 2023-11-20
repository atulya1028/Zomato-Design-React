let restaurants = [
  {
      id:1,    
      img: 'https://b.zmtcdn.com/data/pictures/chains/1/19838911/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg',
      remark: 'Promoted',
      name:'Starbucks Coffee',
      types:'Cafe, Beverages, Desserts...',
      rating:'4.2',
      price:300,
      distance:'20 min'
  },
  {
      id:2,
      img: 'https://b.zmtcdn.com/data/pictures/3/20734063/fe70bd593ead2bdc4b09a066468484fe_o2_featured_v2.jpg',
      remark: '',
      name:'Rawat Mishthan Bhandar',
      types:'Mithai, North Indian, South...',
      rating:'4.0',
      price:100,
      distance:'62 min'
  },
  {
      id:3,
      img: 'https://b.zmtcdn.com/data/pictures/chains/0/20324910/1f6e43ce5e9bab42ac113d481351ca59_o2_featured_v2.jpg',
      remark: 'Promoted',
      name:'EatFit - Desi Meals, Burgers & ...',
      types:'Healthy Food, North India...',
      rating:'3.9',
      price:100,
      distance:'18 min'
  },
  {
      id:4,
      img: 'https://b.zmtcdn.com/data/pictures/chains/9/19526949/b62a5cf0ae92446aef6425255d0b6890_o2_featured_v2.jpg',
      remark: '',
      name:'Kwality Wall\'s Frozen Dessert...',
      types:'Ice Cream, Desserts',
      rating:'4.5',
      price:100,
      distance:'27 min'
  },
  {
      id:5,
      img: 'https://b.zmtcdn.com/data/pictures/chains/8/100148/49dbb6b8db9bd82a41a79d573643f4fa_o2_featured_v2.jpg',
      remark: '',
      name:'Kanha',
      types:'Mithai, Street Food, North...',
      rating:'4.2',
      price:100,
      distance:'24 min'
  },
  {
      id:6,
      img: 'https://b.zmtcdn.com/data/pictures/2/20533712/15819424865ca964a9bec3705fd295a3_o2_featured_v2.jpg',
      remark: '',
      name:'Khandelwal Dhaba',
      types:'South Indian, Chinese, Str...',
      rating:'3.7',
      price:100,
      distance:'37 min'
  },
];

let data = '';

for(let i=0;i<restaurants.length;i++) {
data += ` 
<div class="grid-container" style="padding-left: 50px;padding-right: 50px;">

<div style="width: 320px; padding: 10px;" class="card-box">
<div>
<div style="
position: absolute;
padding-left: 5px;
padding-top: 2px;
padding-right: 5px;
background-color: rgba(0, 0, 0, 0.3);
color: #fff;
border-radius: 10px;
margin-left: 10px;
margin-top: 10px;
font-size: 10px;
">${restaurants[i].remark != null ? restaurants[i].remark : ''}</div>
<img src="${restaurants[i].img}" alt="" style="width: 300px; height: 250px; border-radius: 10px;">
</div>
<br>
<div class="rating-style">
<div>${restaurants[i].name}</div>
<div class='rating-div'>${restaurants[i].rating} <i class="fa-solid fa-star"></i></div>
</div>
<div style="display: flex;justify-content: space-between;">
<div style="font-size: 13px;">${restaurants[i].types}</div>
<div style="font-size: 13px;"><i class="fa-solid fa-indian-rupee-sign"></i>${restaurants[i].price} for one</div>
</div>
<div style="display: flex;justify-content: end;">
<div style="font-size: 13px;">${restaurants[i].distance}</div>
</div>
</div>
</div>
</div>
`;

}

document.getElementById("rest").innerHTML = data;



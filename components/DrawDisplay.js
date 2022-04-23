app.component('draw-display', {
  props: {},
  template: 
  /*html*/
  `<div class="draw-display">
    <div class="product-container">
      <div class="drawing-image">
        <img v-bind:src="image">
      </div>
      <div class="game-info">
        <h3 style="text-align: center;">{{ title }}</h3>

      
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="box-palette" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
         <ul>
          <li v-for="detail1 in details1">{{ detail1 }}</li>
        </ul>
        
        <div 
          v-for="(variant1, index) in variants1" 
          :key="variant1.id" 
          @mouseover="updateVariant(index)" 
          class="box-palette" 
          :style="{ backgroundColor: variant1.color }">
        </div>
        
         <ul>
          <li v-for="detail2 in details2">{{ detail2 }}</li>
        </ul>
        
        <div 
          v-for="(variant2, index) in variants2" 
          :key="variant2.id" 
          @mouseover="updateVariant(index)" 
          class="box-palette" 
          :style="{ backgroundColor: variant2.color }">
        </div>
        
         <ul>
          <li v-for="detail3 in details3">{{ detail3 }}</li>
        </ul>
        
        <div 
          v-for="(variant3, index) in variants3" 
          :key="variant3.id" 
          @mouseover="updateVariant(index)" 
          class="box-palette" 
          :style="{ backgroundColor: variant3.color }">
        </div>
        
        <div class="crayons-image">
        <img v-bind:src="image1">
        </div>
        <button 
          class="put-on"  
          v-on:click="addToCart">
          Put to Box
        </button>
      
        
      </div>
    </div>
    <comment-list v-if="reviews.length" :reviews="reviews"></comment-list>
    <comment-box @review-submitted="addReview"></comment-box>
  </div>`,
  data() {
    return {
        product: '',
        brand: 'Guess the Color',
        selectedVariant: 0,
        image1: './assets/images/crayons.jpg',
        details: ['What are the color of the Trees?'],
        details1: ['What are the color of the frogs?'],
        details2: ['What is the color of the Sun?'],
        details3: ['What is the color of the Grass?'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/template_1.jpg'},
          { id: 2235, color: 'blue', image: './assets/images/template_2.jpg'}
        ],
        variants1: [
            { id: 2236, color: 'pink', image: './assets/images/template_1.jpg'},
            { id: 2237, color: 'green', image: './assets/images/template_2.jpg'}
        ],
        variants2: [
            { id: 2236, color: 'yellow', image: './assets/images/template_1.jpg'},
            { id: 2237, color: 'red', image: './assets/images/template_2.jpg'}
        ],
        variants3: [
            { id: 2236, color: 'green', image: './assets/images/template_1.jpg'},
            { id: 2237, color: 'orange', image: './assets/images/template_2.jpg'}
        ],
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      }
  }
})
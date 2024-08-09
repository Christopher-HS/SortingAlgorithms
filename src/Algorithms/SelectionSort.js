export default function selectionSort1(array) {
    const animation = {};
    animation.comparison = [];
    animation.swap = [];

    for (let i = 0; i < array.length; i++) {
        let low = array[i];
        let lowIndex = i;
        for (let index = i; index < array.length; index++) {
          animation.comparison.push([i, index])
          if (array[index] < low) {
            low = array[index];
            lowIndex = index;
          }
        }
        let tmp = low;
        array[lowIndex] = array[i];
        array[i] = tmp;
        animation.swap.push([i, lowIndex])
        
      }
      return animation;
      
    }


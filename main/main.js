module.exports = function main(inputs) {
  let {distance, parkTime} = inputs
  return Math.round(parkTime * 0.25 
    + 6 +(distance > 8 ? (distance - 8) * 1.2 + 6 * 0.8: (distance > 2 ?(distance - 2) * 0.8 : 0))
   ) ;
};

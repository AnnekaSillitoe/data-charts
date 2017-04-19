document.getElementById('chart1').addEventListener('click', function(){
  toggle('svg.chart-1', 'svg.chart-2');
})

document.getElementById('chart2').addEventListener('click', function(){
  toggle('svg.chart-2', 'svg.chart-1');
})

function toggle(toShow, toHide){
  if(!document.querySelector(toHide).classList.contains('hidden')){
    document.querySelector(toHide).classList.add('hidden');
  }
  document.querySelector(toShow).classList.remove('hidden');
}

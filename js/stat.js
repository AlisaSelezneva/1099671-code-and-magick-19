'use strict';

window.renderStatistics = function (ctx, names, times) {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 50;
  var LINE_GAP = 20;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;
  var BAR_DOWN = CLOUD_Y - LINE_GAP + CLOUD_HEIGHT - LINE_GAP;
  var BAR_MAX = 150;

  var renderCloud = function (context, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 135, 25);
  ctx.fillText('Список результатов:', 135, 48);

  var getMaxTime = function (time) {
    var maxTime = time[0];
    for (var i = 1; i < time.length; i++) {
      if (time[i] > maxTime) {
        maxTime = time[i];
      }
    }
    return maxTime;
  };

  for (var i = 0; i < names.length; i++) {
    var BAR_HEIGHT = Math.round((BAR_MAX * times[i]) / getMaxTime(times));
    var BAR_Y = BAR_DOWN - BAR_HEIGHT;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(233, 100%, ' + (Math.floor(Math.random() * 70) + 20) + '%)';
    }
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, BAR_Y - LINE_GAP);
    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, CLOUD_HEIGHT - LINE_GAP);
  }
};

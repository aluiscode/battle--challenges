import { Music } from './Music.ts';
import { ChallengePrinter } from './plugins/ChallengePrinter.ts';

const music = new Music({
  end: 100,
  plugins: [new ChallengePrinter()]
});



// TODO: write your code here
import GameSavingLoader from './loader';

(async () => {
  try{
    const saving = await GameSavingLoader.load();
    return saving;
    // console.log(saving);
  } catch (e) {
    return e
  }
})();

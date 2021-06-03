
export class translator {
  static translate(sentence){
    //return sentence.split(' ').map(word => word.replace(/^([^aeiou])?(.+)$/, '$2$1ay')).join(' ');
    return sentence.split(' ').map(word => word.replace(/^(s?qu|[^aeiou]+|yt\w+)?(.+)$/, '$2$1ay')).join(' ');
  }
}

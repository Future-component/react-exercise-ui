/**
 * Created by hao.cheng on 2017/4/28.
 */
// 获取url的参数
export const queryString = () => {
    let _queryString = {};
    const _query = window.location.search.substr(1);
    const _vars = _query.split('&');
    _vars.forEach((v, i) => {
        const _pair = v.split('=');
        if (!_queryString.hasOwnProperty(_pair[0])) {
            _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
        } else if (typeof _queryString[_pair[0]] === 'string') {
            const _arr = [ _queryString[_pair[0]], decodeURIComponent(_pair[1])];
            _queryString[_pair[0]] = _arr;
        } else {
            _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
        }
    });
    return _queryString;
};

// 金额转换
export const priceFormat = (value) => {
  let v = '';
  let j = '';
  let sj = '';
  let rv = '';
  v = value.replace(/,/g, '').split('.');
  j = v[0].length % 3;
  sj = v[0].substr(j).toString();

  for (let i = 0; i < sj.length; i += 1) {
    rv = (i % 3 === 0) ? `${rv},${sj.substr(i, 1)}` : rv + sj.substr(i, 1);
  }
  let rvalue = (v[1] === undefined) ? v[0].substr(0, j) + rv : `${v[0].substr(0, j)}${rv}.${v[1]}`;
  if (rvalue.charCodeAt(0) === 44) {
    rvalue = rvalue.substr(1);
  }
  return rvalue;
};

// 电话转换
export const phoneFormat = (value) => {
  const val = `${value}`;
  if (isNaN(Number(value))) {
    return val;
  } else if (val.length === 11) {
    return `${val.substr(0, 3)}-${val.substr(3, 4)}-${val.substr(7, 4)}`;
  } else if (val.length === 12) {
    return `${val.substr(0, 4)}-${val.substr(4, 8)}`;
  }
  return val;
};
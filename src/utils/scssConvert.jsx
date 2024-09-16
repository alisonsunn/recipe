export function scssConvert(className, styles, preClassName){
  // "btn" => ["btn"]
  const classList = className ? className.split(' ') : [];
  // "btn-primary" => ["btn-primary"]
  const preClassList = preClassName ? preClassName.split(' ') : [];
  // ["btn"] => ["btn-456"]
  const styledClassList = classList.map((item) => styles[item] || item)
  // ["btn-primary"] => ["btn-primary-123"]
  const styledPreClassList = preClassList.map((item) => styles[item] ||item)
  // ["btn-456" "btn-primary-123"]
  return [...styledClassList, ...styledPreClassList].join(' ');
}
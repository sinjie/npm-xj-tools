
// 单击复制
exports.copyToClip = (content:string, callback = () => { }) => {
  var aux = document.createElement('input')
  aux.setAttribute('value', content)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
  callback()
}
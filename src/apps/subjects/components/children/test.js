const selectedSubjects = [1,8,5,6,9,3,88,7]
const selectedSubjectIds = () => {
  const _ids = []
  for (let i = 0; i < selectedSubjects.length; i++){
    _ids.push(i)
  }
  return _ids
}

console.log(selectedSubjectIds.forEach(s => s))
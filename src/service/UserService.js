export function findById(id){
    fetch(`localhost:5001/user/1`)
        .then(result=>result.json())
        .then(return result))
}
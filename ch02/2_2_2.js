const formData = new FormData();
formData.append('name','zerocho');
formData.append('item','orange');
formData.append('item','melon');
formData.has('item'); // true
formData.has('money'); // false
formData.get('item'); // orange
formData.getAll('item'); // ['orange', 'melon']
formData.append('test', ['hi', 'zero']);
formData.get('test'); //hi, zero
formData.delete('test');
formData.get('test'); // null
formData.set('item', 'apple');
formData.getAll('item'); // ['apple']

(async () => {
    try{
        const formData = new FormData();
        formData.append('name', 'zerocho');
        formData.append('birth', 1994);
        const result = await axios.post('https://www.zerocho.com/api/post/formData', formData);
        console.log(result);
        console.log(result.data);
    } catch(error){
        console.error(error);
    }
})();
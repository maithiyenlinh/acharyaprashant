export const conversTime = (time) => {
    const hour = Math.floor(time);
    const min = Math.floor((time * 60) % 60);
    return hour + (hour === 1 ? " hour " : " hours ") + min + (min === 1 ? " minute" : " minutes");
}

export const formatData = (data) => {
    const key = 'parent';
    const parentTags = data[0];
    const childrenTags = data[1].reduce((hash, child) => {
        if(child[key] === undefined) return hash;
        return Object.assign(hash, { [child[key]]: ( hash[child[key]] || []).concat(child)})
    }, {});
    return {
        parent: parentTags,
        children: childrenTags,
    }
}
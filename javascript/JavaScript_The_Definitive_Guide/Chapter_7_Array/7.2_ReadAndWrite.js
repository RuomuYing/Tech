var a = ['world'];
// 读
var value = a[0];

// 写
a[1] = 3.14;

i = 2;
a[2] = 3;
a[i + 1] = 'hello'
a[a[i]] = a[0]

// 数组是一种特殊的对象，访问元素时数字索引被转化为字符串作为对象的属性名进行访问
// 数组的特别之处在于，如果属性的值等于0-2^32之间的某个整数（不论是int/float/string），则自动维护了length属性
a.length // 4

// 创建了名为"-1.23"的属性
a[-1.23] = true; // 这时查看a.length还是4，因为不符合数字索引
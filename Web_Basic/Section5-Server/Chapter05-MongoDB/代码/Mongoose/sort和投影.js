//查询文档时，默认情况是按照_id的值进行排列（升序）
//sort()可以用来指定文档的排序的规则,sort()需要传递一个对象来指定排序规则 1表示升序 -1表示降序
//limit skip sort 可以以任意的顺序进行调用
db.emp.find({}).sort({sal:1,empno:-1});

//在查询时，可以在第二个参数的位置来设置查询结果的 投影
db.emp.find({},{ename:1 , _id:0 , sal:1});


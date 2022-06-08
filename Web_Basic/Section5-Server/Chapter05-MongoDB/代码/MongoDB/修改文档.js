/*
    修改
     db.collection.update(查询条件,新对象)
        - update()默认情况下会使用新对象来替换旧的对象
        - 如果需要修改指定的属性，而不是替换需要使用“修改操作符”来完成修改
            $set 可以用来修改文档中的指定属性
            $unset 可以用来删除文档的指定属性
        - update()默认只会修改一个
            
        db.collection.updateMany()
        - 同时修改多个符合条件的文档
   
        db.collection.updateOne()
        - 修改一个符合条件的文档    
        
        db.collection.replaceOne()
        - 替换一个文档
*/
db.stus.find({});

//替换
db.stus.update({name:"沙和尚"},{age:28});

db.stus.update(
    {"_id" : ObjectId("59c219689410bc1dbecc0709")},
    {$set:{
        gender:"男",
        address:"流沙河"
    }}    
)

db.stus.update(
    {"_id" : ObjectId("59c219689410bc1dbecc0709")},
    {$unset:{
        address:1
    }}    
)

db.stus.updateMany(
    {"name" : "猪八戒"},
    {
        $set:{
            address:"猪老庄"
        }
    }    
);
    
db.stus.update(
    {"name" : "猪八戒"},
    
    {
        $set:{
        address:"呵呵呵"
        }
    }  ,
    {
        multi:true
    }    
)

db.stus.find()

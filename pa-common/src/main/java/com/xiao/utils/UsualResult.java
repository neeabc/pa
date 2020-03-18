package com.xiao.utils;

import com.xiao.entity.Result;

public class UsualResult {
    public static final Result fail = new Result(false,"操作失败");
    public static final Result success = new Result(true,"操作成功");
    public static Result check(int i){
        if (i>0){
            return UsualResult.success;
        }else {
            return UsualResult.fail;
        }
    }
}

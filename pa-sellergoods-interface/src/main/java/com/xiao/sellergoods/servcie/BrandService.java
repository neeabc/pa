package com.xiao.sellergoods.servcie;

import com.xiao.pojo.TbBrand;

import java.util.List;

/**
 * Created by travelround on 2018/12/6.
 */
public interface BrandService {
    /**
     * 返回全部列表
     * @return
     */
    public List<TbBrand> findAll();
}

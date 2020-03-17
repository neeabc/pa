package com.xiao.sellergoods.service;

import com.github.pagehelper.PageInfo;
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
    List<TbBrand> findAll();
    PageInfo<TbBrand> findPage(int pageNum, int pageSize);
    int add(TbBrand tbBrand);

    TbBrand findOne(long id);

    int update(TbBrand tbBrand);

    int delete(long[] ids);

    PageInfo<TbBrand> search(Integer page, Integer rows, TbBrand tbBrand);
}

package com.xiao.sellergoods.service;

import com.xiao.pojo.TbBrand;
import com.xiao.servcie.BaseService;

import java.util.List;
import java.util.Map;

/**
 * Created by travelround on 2018/12/6.
 */
public interface BrandService extends BaseService<TbBrand,Long> {
    List<Map> selectOptionList();
    /**
     * 返回全部列表
     * @return
     */
/*    List<TbBrand> findAll();
    PageInfo<TbBrand> findPage(int pageNum, int pageSize);
    int add(TbBrand tbBrand);
    TbBrand findOne(long id);
    int update(TbBrand tbBrand);
    int delete(long[] ids);
    PageInfo<TbBrand> search(Integer page, Integer rows, TbBrand tbBrand);*/
}

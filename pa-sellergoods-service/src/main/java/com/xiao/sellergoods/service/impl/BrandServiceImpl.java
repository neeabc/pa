package com.xiao.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.xiao.mapper.TbBrandMapper;
import com.xiao.pojo.TbBrand;
import com.xiao.sellergoods.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by travelround on 2018/12/6.
 */
@Service
public class BrandServiceImpl implements BrandService {
    @Autowired
    private TbBrandMapper brandMapper;

    @Override
    public List<TbBrand> findAll() {
        List<TbBrand> list = brandMapper.selectByExample(null);
        return list;
    }

    @Override
    public PageInfo<TbBrand> findPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<TbBrand> list = brandMapper.selectByExample(null);
        PageInfo<TbBrand> info = new PageInfo<>(list);
        return info;
    }

    @Override
    public int add(TbBrand tbBrand) {
        int i = brandMapper.insertSelective(tbBrand);
        return i;
    }

    @Override
    public TbBrand findOne(long id) {
        return brandMapper.selectByPrimaryKey(id);
    }

    @Override
    public int update(TbBrand tbBrand) {
        int i = brandMapper.updateByPrimaryKeySelective(tbBrand);
        return i;
    }
}

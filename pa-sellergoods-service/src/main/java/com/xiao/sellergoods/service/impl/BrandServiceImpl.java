package com.xiao.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.xiao.entity.PageResult;
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
        return brandMapper.selectByExample(null);
    }

    @Override
    public PageResult<TbBrand> findPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        Page<TbBrand> page = (Page<TbBrand>) brandMapper.selectByExample(null);
        return new PageResult<>(page.getTotal(), page.getResult());
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

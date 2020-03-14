package com.xiao.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.xiao.mapper.TbBrandMapper;
import com.xiao.pojo.TbBrand;
import com.xiao.sellergoods.servcie.BrandService;
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
}

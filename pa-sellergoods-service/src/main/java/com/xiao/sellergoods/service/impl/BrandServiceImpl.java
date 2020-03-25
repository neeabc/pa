package com.xiao.sellergoods.service.impl;


import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.xiao.mapper.TbBrandMapper;
import com.xiao.pojo.TbBrand;
import com.xiao.pojo.TbBrandExample;
import com.xiao.sellergoods.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

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
    public TbBrand findOne(Long id) {
        return brandMapper.selectByPrimaryKey(id);
    }

    @Override
    public int update(TbBrand tbBrand) {
        int i = brandMapper.updateByPrimaryKeySelective(tbBrand);
        return i;
    }


    public int delete(List<Long> ids) {
        int i=0;
        for(long id:ids){
            i += brandMapper.deleteByPrimaryKey(id);
        }
        return i;
    }

    @Override
    public PageInfo<TbBrand> search(Integer page, Integer rows, TbBrand tbBrand) {
        PageHelper.startPage(page, rows);

        TbBrandExample example = new TbBrandExample();
        TbBrandExample.Criteria criteria = example.createCriteria();
        if (tbBrand!=null){
            String name = tbBrand.getName();
            String firstChar = tbBrand.getFirstChar();
            if (name!=null && !name.equals("")){
                criteria.andNameLike("%"+name+"%");
            }
            if (firstChar!=null && firstChar.length()==1){
                criteria.andFirstCharEqualTo(firstChar.toUpperCase());
            }
        }

        List<TbBrand> list = brandMapper.selectByExample(example);
        PageInfo<TbBrand> info = new PageInfo<>(list);
        return info;
    }

    @Override
    public List<Map> selectOptionList() {
        return brandMapper.selectOptionList();
    }
}

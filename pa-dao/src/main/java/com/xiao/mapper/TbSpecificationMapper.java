package com.xiao.mapper;

import com.xiao.pojo.TbSpecification;
import com.xiao.pojo.TbSpecificationExample;

import java.util.List;
import java.util.Map;

public interface TbSpecificationMapper extends BaseMapper<TbSpecification,TbSpecificationExample,Long>{
    List<Map> selectOptionList();
/*    int countByExample(TbSpecificationExample example);

    int deleteByExample(TbSpecificationExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbSpecification record);

    int insertSelective(TbSpecification record);

    List<TbSpecification> selectByExample(TbSpecificationExample example);

    TbSpecification selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbSpecification record, @Param("example") TbSpecificationExample example);

    int updateByExample(@Param("record") TbSpecification record, @Param("example") TbSpecificationExample example);

    int updateByPrimaryKeySelective(TbSpecification record);

    int updateByPrimaryKey(TbSpecification record);*/
}
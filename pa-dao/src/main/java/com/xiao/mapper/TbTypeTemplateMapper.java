package com.xiao.mapper;

import com.xiao.pojo.TbTypeTemplate;
import com.xiao.pojo.TbTypeTemplateExample;

import java.util.List;
import java.util.Map;

public interface TbTypeTemplateMapper extends BaseMapper<TbTypeTemplate,TbTypeTemplateExample,Long> {
    List<Map> selectOptionList();
/*    int countByExample(TbTypeTemplateExample example);

    int deleteByExample(TbTypeTemplateExample example);

    int deleteByPrimaryKey(Long id);

    int insert(TbTypeTemplate record);

    int insertSelective(TbTypeTemplate record);

    List<TbTypeTemplate> selectByExample(TbTypeTemplateExample example);

    TbTypeTemplate selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbTypeTemplate record, @Param("example") TbTypeTemplateExample example);

    int updateByExample(@Param("record") TbTypeTemplate record, @Param("example") TbTypeTemplateExample example);

    int updateByPrimaryKeySelective(TbTypeTemplate record);

    int updateByPrimaryKey(TbTypeTemplate record);*/
}
package com.xiao.group;

import com.xiao.pojo.TbSpecification;
import com.xiao.pojo.TbSpecificationOption;
import lombok.Data;

import java.io.Serializable;
import java.util.List;


@Data
public class Specification implements Serializable {

    private static final long serialVersionUID = -5766877457849011362L;

    private TbSpecification specification;
    private List<TbSpecificationOption> specificationOptionList;

}

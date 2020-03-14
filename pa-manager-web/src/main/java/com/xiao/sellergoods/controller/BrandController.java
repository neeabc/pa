package com.xiao.sellergoods.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.xiao.pojo.TbBrand;
import com.xiao.sellergoods.servcie.BrandService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by travelround on 2018/12/6.
 */
//1.使用@Controller 注解，在对应的方法上，视图解析器可以解析return 的jsp,html页面，并且跳转到相应页面,若返回json等内容到页面，则需要加@ResponseBody注解
//2.@RestController注解，相当于@Controller+@ResponseBody两个注解的结合，返回json数据不需要在方法前面加@ResponseBody注解了，但使用@RestController这个注解，就不能返回jsp,html页面，视图解析器无法解析jsp,html页面
@RestController
@RequestMapping("/brand")
public class BrandController {
    // @reference也是注入，但是一般用来注入分布式的远程服务对象，需要配合dubbo配置使用
    @Reference
    private BrandService brandService;
    /**
     * 返回全部列表
     * @return
     */
    @RequestMapping("/findAll")
    public List<TbBrand> findAll(){
        System.out.println("aaaaaa");
        return brandService.findAll();
    }
}

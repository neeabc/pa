package com.xiao.sellergoods.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.github.pagehelper.PageInfo;
import com.xiao.entity.PageResult;
import com.xiao.entity.Result;
import com.xiao.pojo.TbBrand;
import com.xiao.sellergoods.service.BrandService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    //日志
    protected final Log logger = LogFactory.getLog(this.getClass());

    // @reference也是注入，但是一般用来注入分布式的远程服务对象，需要配合dubbo配置使用
    @Reference
    private BrandService brandService;
    /**
     * 返回全部列表
     * @return
     */
    @RequestMapping("/findAll")
    public List<TbBrand> findAll(){
        List<TbBrand> list = brandService.findAll();
        return list;
    }

    @RequestMapping("/findPage")
    public PageResult<TbBrand> findPage(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer rows){
        PageInfo<TbBrand> result = brandService.findPage(page, rows);
        return new PageResult<>(result.getTotal(), result.getList());
    }

    @RequestMapping("/findOne")
    public TbBrand findOne(long id){
        return brandService.findOne(id);
    }

    @RequestMapping("/add")
    public Result add(@RequestBody TbBrand tbBrand){
        int i;
        try{
            i = brandService.add(tbBrand);
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false, "增加失败");
        }
        if (i==0){
            return new Result(false, "增加失败");
        }else {
            return new Result(true, "增加成功");
        }
    }

    @RequestMapping("/update")
    public Result update(@RequestBody TbBrand tbBrand){
        int i;
        try{
            i = brandService.update(tbBrand);
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false, "修改失败");
        }
        if (i==0){
            return new Result(false, "修改失败");
        }else {
            return new Result(true, "修改成功");
        }
    }

    @RequestMapping("/delete")
    public Result delete(long[] ids){
        int i;
        try{
            i = brandService.delete(ids);
        }catch (Exception e){
            e.printStackTrace();
            return new Result(false, "修改失败");
        }
        if (i==0){
            return new Result(false, "修改失败");
        }else {
            return new Result(true, "修改成功");
        }
    }

    @RequestMapping("/search")
    public PageResult<TbBrand> search(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer rows,
            @RequestBody TbBrand tbBrand){
        PageInfo<TbBrand> info = brandService.search(page,rows,tbBrand);
        return new PageResult<>(info.getTotal(), info.getList());
    }
}

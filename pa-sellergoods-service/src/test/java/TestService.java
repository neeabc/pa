import com.alibaba.dubbo.config.annotation.Reference;
import com.xiao.pojo.TbBrand;
import com.xiao.sellergoods.service.BrandService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath*:spring/applicationContext*.xml")
public class TestService {

    @Reference
    BrandService brandService;

    @Test
    public void test01(){
        List<TbBrand> list = brandService.findAll();
        for (TbBrand t:list){
            System.out.println(t.getName());
        }
    }
}

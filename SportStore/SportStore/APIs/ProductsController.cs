using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportStore.BusinessModel.Models;
using SportStore.Data;

namespace SportStore.APIs
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private ApplicationDbContext context;

        public ProductsController(ApplicationDbContext ctx)
        {
            context = ctx;
        }


        [HttpGet("FirstProduct")]
       public Task<Product> GetFirstProduct()
        {

           return Task.FromResult(context.Products.First());

        }


    }
}
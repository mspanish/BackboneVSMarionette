(function(){dust.register("person",body_0);function body_0(chk,ctx){return chk.section(ctx.get("items"),ctx,{"block":body_1},null).write("</tr>\t");}function body_1(chk,ctx){return chk.write("<tr><td>This should be my field ").reference(ctx.get("$idx"),ctx,"h").write("<h1>").reference(ctx.get("field"),ctx,"h").write("</h1></td>");}return body_0;})();
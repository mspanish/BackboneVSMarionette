(function(){dust.register("card",body_0);function body_0(chk,ctx){return chk.write("<div id=\"container\" class=\"flip-card\"><div id=\"f1_card\" class=\"shadow\"><div class=\"card front card-front visible\" data-index=\"").reference(ctx.get("index"),ctx,"h").write("\"><h2>").reference(ctx.get("spanish"),ctx,"h").write("</h2></div><div class=\"card back card-back\" data-index=\"").reference(ctx.get("index"),ctx,"h").write("\"><h2>").reference(ctx.get("english"),ctx,"h").write("</h2></div></div></div>");}return body_0;})();;(function(){dust.register("empty",body_0);function body_0(chk,ctx){return chk.write("<h1>Sorry, there are no items!</h1><p>try another tab...</p>");}return body_0;})();;(function(){dust.register("main",body_0);function body_0(chk,ctx){return chk.write("<h1>").reference(ctx.get("title"),ctx,"h").write("</h1><div id=\"nav\"></div><div id=\"tabs\"></div>");}return body_0;})();;(function(){dust.register("person",body_0);function body_0(chk,ctx){return chk.write("<tr>").section(ctx.get("items"),ctx,{"block":body_1},null).write(" ");}function body_1(chk,ctx){return chk.section(ctx.get("fields"),ctx,{"block":body_2},null).write("</tr>");}function body_2(chk,ctx){return chk.write("<td><h2>").reference(ctx.get("field"),ctx,"h").write("</h2></td>");}return body_0;})();;(function(){dust.register("single",body_0);function body_0(chk,ctx){return chk.write("<h1>").reference(ctx.get("title"),ctx,"h").write("</h1><p>").reference(ctx.get("content"),ctx,"h").write("</p>");}return body_0;})();;(function(){dust.register("table",body_0);function body_0(chk,ctx){return chk.write("<table class='table-bordered table-striped'><thead>        <tr>").section(ctx.get("rows"),ctx,{"block":body_1},null).write("</tr></thead><tbody >").partial("tablefields",ctx,null).write("\t</tbody></table>");}function body_1(chk,ctx){return chk.write("<th>").reference(ctx.get("name"),ctx,"h").write("</th>");}return body_0;})();;(function(){dust.register("tablefields",body_0);function body_0(chk,ctx){return chk.write("<tr>").section(ctx.get("items"),ctx,{"block":body_1},null).write(" ");}function body_1(chk,ctx){return chk.section(ctx.get("fields"),ctx,{"block":body_2},null).write("</tr>");}function body_2(chk,ctx){return chk.write("<td><h2>").reference(ctx.get("field"),ctx,"h").write("</h2></td>");}return body_0;})();;(function(){dust.register("tabs",body_0);function body_0(chk,ctx){return chk.section(ctx.get("sections"),ctx,{"block":body_1},null).write("<ul>").section(ctx.get("sections"),ctx,{"block":body_7},null);}function body_1(chk,ctx){return chk.helper("if",ctx,{"else":body_2,"block":body_3},{"cond":body_6});}function body_2(chk,ctx){return chk.write("<input type=\"radio\" name=\"pcss3t\" checked id=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\" class=\"tab-content-last\"><label for=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\"><i class=\"icon-").reference(ctx.get("name"),ctx,"h").write("\"></i>").reference(ctx.get("name"),ctx,"h").write("View</label>");}function body_3(chk,ctx){return chk.write(" <input type=\"radio\" name=\"pcss3t\" ").helper("if",ctx,{"block":body_4},{"cond":body_5}).write(" id=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\" class=\"tab-content-").reference(ctx.get("$idx"),ctx,"h").write("\"><label for=\"tab").reference(ctx.get("$idx"),ctx,"h").write("\"><i class=\"icon-").reference(ctx.get("name"),ctx,"h").write("\"></i>").reference(ctx.get("name"),ctx,"h").write("View</label>");}function body_4(chk,ctx){return chk.write("checked");}function body_5(chk,ctx){return chk.reference(ctx.get("$idx"),ctx,"h").write(" == 0");}function body_6(chk,ctx){return chk.reference(ctx.get("$idx"),ctx,"h").write(" < ").reference(ctx.get("numberItems"),ctx,"h");}function body_7(chk,ctx){return chk.helper("if",ctx,{"else":body_8,"block":body_9},{"cond":body_10});}function body_8(chk,ctx){return chk.write("<li class=\"tab-content tab-content-last typography\"><div id=\"").reference(ctx.get("name"),ctx,"h").write("\"></div></li></ul>");}function body_9(chk,ctx){return chk.write("<li class=\"tab-content tab-content-").reference(ctx.get("$idx"),ctx,"h").write(" typography\"><div id=\"").reference(ctx.get("name"),ctx,"h").write("\"></div></li>");}function body_10(chk,ctx){return chk.reference(ctx.get("$idx"),ctx,"h").write(" < ").reference(ctx.get("numberItems"),ctx,"h");}return body_0;})();
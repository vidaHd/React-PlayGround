describe("renders the home ViewProduct", () => {
  it("render", () => {
    cy.visit("http://localhost:3000/product");
  });

  it("validate", () => {
    cy.get("#btnAdd").click();

    const stub = cy.stub();
    cy.on("window:alert", stub).then(() => {
      expect(stub.getCall(0)).to.be.calledWith("فیلد نام نباید خالی باشد");
    });
    cy.get("#table").find("tr").should("have.length", 1);
    // cy.get("#table tr").should("have.length", 1);
  });

  it("check input name", () => {
    cy.get("#inputName").should("exist");
    cy.get("#inputName").type("a").should("have.value", "a");
    cy.get("#btnAdd").click();

    const stub = cy.stub();
    cy.on("window:alert", stub).then(() => {
      expect(stub.getCall(0)).to.be.calledWith("فیلد توضیحات نباید خالی باشد");
    });
  });

  it("check input description", () => {
    cy.get("#inputDescription").should("exist");
    cy.get("#inputDescription").type("b").should("have.value", "b");
    cy.get("#btnAdd").click();

    const stub = cy.stub();
    cy.on("window:alert", stub).then(() => {
      expect(stub.getCall(0)).to.be.calledWith("فیلد  قیمت نباید خالی باشد");
    });
  });

  it("check input price", () => {
    cy.get("#inputPrice").should("exist");
    cy.get("#inputPrice").type("f").should("have.value", "f");
    cy.get("#btnAdd").click();

    const stub = cy.stub();
    cy.on("window:alert", stub).then(() => {
      expect(stub.getCall(0)).to.be.calledWith("فیلد قیمت نباید حروف باشد");
    });
    cy.get("#inputPrice").clear();

    cy.get("#inputPrice").type(2);
    cy.get("#inputPrice").should("have.value", 2);
    cy.get("#btnAdd").click();
  });

  it("test table", () => {
    cy.get("#table").find("tr").should("have.length", 2);

    cy.get("#table> tbody > tr")
      .find("td")
      .eq(3)
      .invoke("text")
      .should("be.eql", "0");

    // cy.get("#table tbody tr").eq(1).find("td").eq(4).contains(0).should("be.visible");

    cy.get("#table> tbody > tr")
      .find("td")
      .eq(4)
      .invoke("text")
      .should("be.eql", "a");

    cy.get("#table> tbody > tr > td:nth-child(6)")
      .invoke("text")
      .should("be.eql", "b");

    cy.get("#table> tbody > tr > td:nth-child(7)")
      .invoke("text")
      .should("be.eql", "2");
  });

  it("check input name", () => {
    cy.get("#inputName").should("exist");
    cy.get("#inputName").type("a").should("have.value", "a");
    cy.get("#btnAdd").click();
  });

  it("check input description", () => {
    cy.get("#inputDescription").should("exist");
    cy.get("#inputDescription").type("b").should("have.value", "b");
    cy.get("#btnAdd").click();
  });
  it("check input price", () => {
    cy.get("#inputPrice").should("exist");
    cy.get("#inputPrice").type(2).should("have.value", 2);
    cy.get("#btnAdd").click();
  });

  it("test table", () => {
    cy.get("#table").find("tr").should("have.length", 3);
  });

  it("EditRow", () => {
    cy.get('[data-test-btn-delete="0"]').should("exist");
    cy.get('[data-test-btn-edit="0"]').click();
    cy.get("#edi").find("input").should("have.length", 3);
    cy.get("#nameEdit").should("have.value", "a");
    cy.get("#descriptionEdit").should("have.value", "b");
    cy.get("#priceEdit").should("have.value", 2);
    cy.get("#nameEdit").type("aa");
    cy.get("#btnUpdate").click();
    cy.get("#inputName").should("exist");
    cy.get("#table> tbody > tr")
      .find("td")
      .eq(4)
      .invoke("text")
      .should("be.eql", "aaa");
  });

  it("deletRow", () => {
    cy.get('[data-test-btn-delete="1"]').should("exist");
    cy.get('[data-test-btn-delete="1"]').click().wait(2000);
    cy.get('[data-test-btn-delete="1"]').should("not.exist");
    cy.get("#table").find("tr").should("have.length", 2);
  });
});

// cy.get("#btnAdd").find("span").first().invoke("text").should("be.eql", "a");
// data-test-input-name={row.name}
// cy.get("#table").contains("td", "a").should("be.visible");
